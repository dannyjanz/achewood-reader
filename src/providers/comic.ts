export class Comic {
    readonly title: string
    readonly url: string

    constructor(title: string, url: string) {
        this.title = title;
        this.url = url;
    }
}