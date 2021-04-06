import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

@Injectable({
	providedIn: 'root'
})

export class GalleryService {

	constructor(
		private httpClient: HttpClient
	) { }

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	}


	getGallery(): Observable<any> {
		return this.httpClient.get(`/api/gallery`, this.httpOptions)
					.pipe(
						map( (res: any) => {
							return res
						}), catchError( err => {
							return throwError('Something is wrong')
						})
					)
	}

	getAlbum(id): Observable<any> {
		return this.httpClient.get(`/api/gallery/${id}`, this.httpOptions)
					.pipe(
						map( (res: any) => {
							var images = []
							for (var i of res.images) {
								var temp = {
									'small': i,
									'medium': i,
									'big': i
								}
								console.log(i)
								images.push(temp)
							}
							res.images = images
							return res
						}), catchError( err => {
							return throwError('Something is wrong')
						})
					)
	}

	putAlbum(body): Observable<any> {
		return this.httpClient.post(`/api/putAlbum`, body, this.httpOptions)
			.pipe(
				map((res: any) => {
					return res
				}), catchError(err => {
					return throwError('Something is wrong')
				})
			)
	}

	getVideos(): Observable<any> {
		return this.httpClient.get(`/api/video`, this.httpOptions)
			.pipe(
				map((res: any) => {
					return res
				}), catchError(err => {
					return throwError('Something is wrong')
				})
			)
	}

	getVideoById(id): Observable<any> {
		return this.httpClient.get(`/api/video/${id}`, this.httpOptions)
			.pipe(
				map((res: any) => {
					return res
				}), catchError(err => {
					return throwError('Something is wrong')
				})
			)
	}

	putVideo(body): Observable<any> {
		return this.httpClient.post(`/api/putVideo`, body, this.httpOptions)
			.pipe(
				map((res: any) => {
					return res
				}), catchError(err => {
					return throwError('Something is wrong')
				})
			)
	}


}
