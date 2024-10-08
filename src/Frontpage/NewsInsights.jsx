import Button from "./Button";

export default function NewsInsights() {
    return (
        <div className="news-insights-background">
            <div className="news-container">
                <div className="news-text">
                    <hr className="saparator-news" />
                    <h3>News & Insights</h3>
                    <h1 className="news-text-sub">Follow our latest news and announcements</h1>
                </div>
                <div className="news-description-btn">
                    <Button text={"View All "} />
                </div>

            </div>

            <div className="news-insights-featured">
                <div className="featured-vitals-container">

                    <div className="featured-img">
                        <img src="/featured.svg" alt="" />
                    </div>
                    <div className="featured-text">
                        <p>Featured</p>
                        <p className="date-featured">October 06,2023</p>
                    </div>
                    <div className="featured-image-description">
                        <p className="featured-image-description-text">Maecenas interdum iaculis augue eget blandit. In bibendum ultrices mi eu condimentum. Quisque cursus lacus vitae eros placerat placerat.</p>
                    </div>
                    <button className="read-btn">Read More →</button>
                </div>
                <div className="news-insights-report-container">
                    <div className="report-img-text">
                        <img src="/report.svg" alt="" />
                        <div className="btn-text-wrapper">
                            <div className="text-wrapper-featured">
                                <div className="report-date">
                                    <p className="report-tag">Report</p>
                                    <p className="date-featured">October 06,2023</p>
                                </div>
                                <div>
                                    <p className="featured-description">
                                        Pellentesque aliquet metus et lectus cursus,
                                        a finibus justo semper.
                                        Proin gravida orci non neque vulputate consequat.
                                    </p>
                                </div>
                            </div>
                            <button className="read-btn">Read More </button>
                        </div>
                    </div>

                    <div className="report-img-text">
                        <img src="/report2.svg" alt="" />
                        <div className="btn-text-wrapper">
                            <div className="text-wrapper-featured">
                                <div className="report-date">
                                    <p className="report-tag">Report</p>
                                    <p className="date-featured">October 06,2023</p>
                                </div>
                                <div>
                                    <p className="featured-description">
                                        Pellentesque aliquet metus et lectus cursus,
                                        a finibus justo semper.
                                        Proin gravida orci non neque vulputate consequat.
                                    </p>
                                </div>
                            </div>
                            <button className="read-btn">Read More </button>
                        </div>
                    </div>
                    <div className="report-img-text">
                        <img src="/report3.svg" alt="" />
                        <div className="btn-text-wrapper">
                            <div className="text-wrapper-featured">
                                <div className="report-date">
                                    <p className="report-tag">Report</p>
                                    <p className="date-featured">October 06,2023</p>
                                </div>
                                <div>
                                    <p className="featured-description">
                                        Pellentesque aliquet metus et lectus cursus,
                                        a finibus justo semper.
                                        Proin gravida orci non neque vulputate consequat.
                                    </p>
                                </div>
                            </div>
                            <button className="read-btn">Read More </button>
                        </div>
                    </div>
                </div>
            </div>





        </div>

    )
}