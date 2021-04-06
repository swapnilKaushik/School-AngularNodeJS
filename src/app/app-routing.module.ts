import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AlbumComponent } from './components/album/album.component';
import { VideoGalleryComponent } from './components/video-gallery/video-gallery.component';


const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: 'home', component: HomeComponent },
	{ path: 'header', component: HeaderComponent },
	{ path: 'footer', component: FooterComponent },
	{ path: 'about', component: AboutUsComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'album', component: AlbumComponent },
	{ path: 'album/:id', component: AlbumComponent },
	{ path: 'video', component: VideoGalleryComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],  //, { useHash: true }
  exports: [RouterModule]
})

export class AppRoutingModule { }
