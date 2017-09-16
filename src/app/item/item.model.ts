export class Item {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  upvote(): void {
    this.votes += 1;
  }

  downvote(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch(err) {
      return null;
    }
  }

}