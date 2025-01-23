import { Component, OnInit } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  constructor() { }

  backgroundImage: string = '';

    async ngOnInit() {
      await this.loadRandomImage();
    }

    async loadRandomImage() {
      try {
        const images = await Filesystem.readdir({
          path: 'photos',
          directory: Directory.External
        });
        const randomImage = images.files[Math.floor(Math.random() * images.files.length)];
        this.backgroundImage = `assets/photos/${randomImage}`;
      } catch (error) {
        console.error('Error loading image:', error);
      }
    }
}
