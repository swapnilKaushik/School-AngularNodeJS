import { Component, OnInit } from '@angular/core';
import { GalleryService } from './../../services/gallery.service'



@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

    gallery = null

    constructor(
        private galleryService: GalleryService
    ) { }

    ngOnInit(): void {
        this.getGallery()
    }	

    getGallery() {
        this.galleryService.getGallery()
            .subscribe( (res: any) => {
                this.gallery = res
                console.log(res)
            }, err => {
                console.log('error')
            }), err => {
                console.log('error')
            }
    }

}
