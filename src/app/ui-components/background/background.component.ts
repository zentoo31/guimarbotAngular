import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'background',
  standalone: true,
  template: `<canvas id="floatingCanvas"></canvas>`,
  styles: [`
    canvas {
      background: rgb(2,2,2);
      background: linear-gradient(0deg, rgba(2,2,2,1) 0%, rgba(46,41,174,1) 64%, rgba(255,255,255,1) 100%, rgba(0,212,255,1) 020202%);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
  `],
})
export class BackgroundComponent implements AfterViewInit, OnDestroy {
  private ctx!: CanvasRenderingContext2D;
  private animationFrameId!: number;
  private symbols: { x: number; y: number; symbol: string; speed: number; color: string }[] = [];
  private numSymbols = 50; // Número de símbolos flotantes

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = this.document.getElementById('floatingCanvas') as HTMLCanvasElement;
      const context = canvas.getContext('2d');
      if (context) {
        this.ctx = context;
        this.initCanvas(canvas);
        this.initSymbols(canvas);
        this.animate(canvas);

        window.addEventListener('resize', this.handleResize);
      } else {
        console.error('Failed to get 2D context');
      }
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.handleResize);
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    }
  }

  private initCanvas(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private handleResize = () => {
    const canvas = this.document.getElementById('floatingCanvas') as HTMLCanvasElement;
    this.initCanvas(canvas);
  };

  private initSymbols(canvas: HTMLCanvasElement) {
    const availableSymbols = ['{', '}', '(', ')', '[', ']', '<', '>', '/', '*', '+', '-', '=', ';'];
    for (let i = 0; i < this.numSymbols; i++) {
      this.symbols.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        symbol: availableSymbols[Math.floor(Math.random() * availableSymbols.length)],
        speed: Math.random() * 2 + 0.5, // Velocidad de caída
        color: Math.random() > 0.5 ? '#FFF' : '#FEC039' // Asignar color una sola vez
      });
    }
  }

  private animate = (canvas: HTMLCanvasElement, currentTime = 0) => {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.font = '20px monospace';

    this.symbols.forEach((symbolObj) => {
      symbolObj.y += symbolObj.speed; // Simula la caída

      if (symbolObj.y > canvas.height) {
        symbolObj.y = 0;
        symbolObj.x = Math.random() * canvas.width; // Reubica en la parte superior
      }

      this.ctx.fillStyle = symbolObj.color;
      this.ctx.fillText(symbolObj.symbol, symbolObj.x, symbolObj.y);
    });

    this.animationFrameId = requestAnimationFrame((timestamp) => this.animate(canvas, timestamp));
  };
}
