import React, { Component } from "react";
 
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  static propTypes = {};

  articles = [
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Lewis Packwood",
      title:
        "40 years of the Nintendo Famicom – the console that changed the games industry",
      description:
        "Entering a crowded field, the Nintendo Famicom came to dominate the market in the 1980s, leaving a family orientated legacy that continues to be felt todayWhen the Nintendo Famicom, known abroad as the Nintendo Entertainment System, was launched on 15 July 19…",
      url: "https://www.theguardian.com/games/2023/jul/18/40-years-of-the-nintendo-famicom-the-console-that-changed-the-games-industry",
      urlToImage:
        "https://i.guim.co.uk/img/media/2925221df421c81e487e31fc945afbd31c3289cb/0_192_5760_3456/master/5760.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=eacf9881ce7d41dc1a81280ca2669634",
      publishedAt: "2023-07-18T11:00:38Z",
      content:
        "When the Nintendo Famicom, known abroad as the Nintendo Entertainment System, was launched on 15 July 1983, it entered a market crowded with formidable rivals. Six other consoles were released in Jap… [+14820 chars]",
    },
    {
      source: {
        id: null,
        name: "Design-milk.com",
      },
      author: "Gregory Han",
      title: "Aston Martin DB12 Plays a Game of Sporty Succession",
      description:
        "We visit the French Riviera and get behind the wheel of British automaker Aston Martin's most poised and powerful super tourer, the DB12.",
      url: "https://design-milk.com/?p=513408",
      urlToImage:
        "https://design-milk.com/images/2023/06/AstonMartin_DB12-FrenchRiviera-DM-10-810x540.jpg",
      publishedAt: "2023-07-18T13:00:49Z",
      content:
        "Driving conditions were far from ideal across sections of the Route Napoléon last month. The normally achingly bucolic stretch of winding backroads commencing from the glistening coastline of the Côt… [+6568 chars]",
    },
    {
      source: {
        id: null,
        name: "Hackaday",
      },
      author: "Jonathan Bennett",
      title: "This RISC-V CPU Games in Rust from Inside the Game",
      description:
        "[Xander Naumenko] has created something truly impressive — a working RISC-V CPU completely contained in a Terraria world. And then for added fun, he wrote the game of pong, playable …read more",
      url: "https://hackaday.com/2023/07/17/this-risc-v-cpu-games-in-rust-from-inside-the-game/",
      urlToImage:
        "https://hackaday.com/wp-content/uploads/2023/07/Terraria.png",
      publishedAt: "2023-07-18T02:00:26Z",
      content:
        "[Xander Naumenko] has created something truly impressive — a working RISC-V CPU completely contained in a Terraria world. And then for added fun, he wrote the game of pong, playable in real time, fro… [+2300 chars]",
    },
  ];

  constructor() {
    super();
    console.log("sumit");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fdd24911724e4a539b20309265e89f17&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  handlePrevious = async () => {
    console.log("j");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fdd24911724e4a539b20309265e89f17&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
  };

  handleNext = async () => {
    console.log("j");

    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fdd24911724e4a539b20309265e89f17&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;

      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({});
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center my-3">NuzDaily ! stay updated</h1>

        <h3 className="my-4">Trending news</h3>
        {this.state.loading && <Spinner />}
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className=" col-md-4 my-3">
                {" "}
                <Newsitem
                  key={element.url}
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage ? element.urlToImage : ""}
                  newsUrl={element.newsUrl ? element.url : ""}
                />
              </div>
            );
          })}

          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              class="btn btn-dark"
              onClick={this.handlePrevious}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              class="btn btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
