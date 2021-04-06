import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from './../../services/gallery.service'

@Component({
	selector: 'app-album',
	templateUrl: './album.component.html',
	styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

    album = null
	galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

	constructor(
        private galleryService: GalleryService,
        private actRoute: ActivatedRoute
    ) {
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.getAlbum(id)
    }


    getAlbum(id) {
        this.galleryService.getAlbum(id)
            .subscribe((res: any) => {
                this.album = res
                this.galleryImages = res.images
            }, err => {
                console.log('error')
            }), err => {
                console.log('error')
            }
    }

	ngOnInit(): void {

        this.galleryOptions = [
            {
                width: '800px',
                height: '600px',
                thumbnailsColumns: 4,
                imageAutoPlay: true,
                imageAutoPlayPauseOnHover: true,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80, 
                imageSwipe: true,
                imageArrowsAutoHide: true,
                imageAutoPlay: true,
                imageAutoPlayPauseOnHover: true,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
       
        var galleryImages1 = [
            {
                small: 'https://drive.google.com/uc?export=view&id=1W_yAWNtf1axJ7f8i76eISzeyhjgD7KOD',
                medium: 'https://drive.google.com/uc?export=view&id=1W_yAWNtf1axJ7f8i76eISzeyhjgD7KOD',
                big: 'https://drive.google.com/uc?export=view&id=1W_yAWNtf1axJ7f8i76eISzeyhjgD7KOD'
            },
            {
                small: 'https://drive.google.com/uc?export=view&id=1Gtn_Lk_ED0dVUugKoAiOFIaKjxidY8vd',
                medium: 'https://drive.google.com/uc?export=view&id=1Gtn_Lk_ED0dVUugKoAiOFIaKjxidY8vd',
                big: 'https://drive.google.com/uc?export=view&id=1Gtn_Lk_ED0dVUugKoAiOFIaKjxidY8vd'
            },
            {
                small: 'https://drive.google.com/uc?export=view&id=1sQbY2X-EoNyGrz7p4XeGHzk9RJbHQuJu',
                medium: 'https://drive.google.com/uc?export=view&id=1sQbY2X-EoNyGrz7p4XeGHzk9RJbHQuJu',
                big: 'https://drive.google.com/uc?export=view&id=1sQbY2X-EoNyGrz7p4XeGHzk9RJbHQuJug'
            }
        ];

	}

}
