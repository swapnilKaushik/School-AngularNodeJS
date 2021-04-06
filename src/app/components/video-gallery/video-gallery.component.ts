import { Component, OnInit } from '@angular/core';
import { GalleryService } from './../../services/gallery.service'


@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})

export class VideoGalleryComponent implements OnInit {

  gallery = null
  video = null

  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit(): void {
    this.getVideos()
  }

  getVideos() {
    this.galleryService.getVideos()
      .subscribe((res: any) => {
        this.gallery = res
        this.video = res[res.length-1]
        console.log(res)
      }, err => {
        console.log('error')
      }), err => {
        console.log('error')
      }
  }

}