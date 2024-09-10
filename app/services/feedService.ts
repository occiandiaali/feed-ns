import { FeedModel } from "~/models/feed";
import { feedList } from "~/data/db";

export class FeedService {
    
    static getInstance(): FeedService {
        return FeedService._instance
    }
    private static _instance: FeedService = new FeedService()

    getFeedList(): FeedModel[] {
        return feedList
    }

    getFeedById(id: number): FeedModel | undefined {
        return feedList.find((feed) => feed.id === id) || undefined
    }
}