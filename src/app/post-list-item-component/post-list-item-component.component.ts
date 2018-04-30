import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-post-list-item-component',
    templateUrl: './post-list-item-component.component.html',
    styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
    @Input() Title;
    @Input() Content:string;
    @Input() Created_at: Date;
    @Input() Likes: number;

    constructor() { }

    ngOnInit() {
    }
        
    onAime(){
        this.Likes=this.Likes +1
    }
    onAimePas(){
        this.Likes=this.Likes -1
    }

}
