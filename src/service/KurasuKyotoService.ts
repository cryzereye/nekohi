import { SellerProfile } from "../model/SellerProfile";
import { RRSService } from "./RSSService";

export class KurasuKyotoService extends RRSService {
    constructor(seller: SellerProfile) {
        super(seller);
        this.parse();
    }

    parse(): void {
        super.parse();

        this.parser.parseURL(this.url).then((feed) => {
            feed.items.forEach(item => {
                console.log(item.title + ':' + item.link)
            }
            );
        });
    }

}