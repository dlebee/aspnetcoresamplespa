import { Component } from "@angular/core";
import { BlogService } from '../api/services';
import { Observable } from 'rxjs';
import { Blog } from '../api/models';

@Component({
    templateUrl: './blog-page.component.html'
})
export class BlogPageComponent
{
    blogs$: Observable<Blog[]>;

    constructor(protected blogService: BlogService) {
        this.blogs$ = this.blogService.Get({page: 1, pageSize: 10});
    }
}