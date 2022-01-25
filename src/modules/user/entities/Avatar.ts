export class Avatar {
    public avatar: Buffer;
    public filename: string;
    public ext: string;

    constructor(avatar: Buffer, filename: string, ext: string) {
        this.avatar = avatar;
        this.filename = filename;
        this.ext = ext;
    }

    public static init(avatar: Buffer, filename: string, ext: string) {
        return new Avatar(avatar, filename, ext);
    }
}