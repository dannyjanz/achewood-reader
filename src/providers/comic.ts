export class Comic {
    readonly title: string
    readonly url: string
    readonly date: string

    constructor(title: string, url: string, date: string) {
        this.title = title;
        this.url = url;
        this.date = date;
    }
}