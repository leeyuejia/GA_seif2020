const LiTag = (prop) => {
    return <li className={prop.class}>{prop.text}</li>
}
const Title = (prop) => {
    return <h4>{prop.title}</h4>
}
const Stats = (prop) => {
    return <h2>{prop.stats}</h2>
}

class SideBar extends React.Component {
    render() {
        return (
            <div id={this.props.idSection}>
                <ul>
                    <LiTag class='dashboardList' text='Dashboard' />
                    <LiTag class='dashboardList' text='Widget' />
                    <LiTag class='dashboardList' text='Reviews' />
                    <LiTag class='dashboardList' text='Customer' />
                    <LiTag class='dashboardList' text='Online Analysis' />
                    <LiTag class='dashboardList' text='settings' />
                </ul>
            </div>
        )
    }
}
class TopCard extends React.Component {
    render() {
        return (
            <div className={this.props.cardsection}>
                <Title title={this.props.title} />
                <Stats stats={this.props.stats} />
            </div>
        )
    }
}
class TopCardB extends React.Component {
    render() {
        return (
            <div className={this.props.cardsection}>
                <Title title={this.props.title} />
                <Stats stats={this.props.stat1} />
                <Stats stats={this.props.stat2} />
                <Stats stats={this.props.stat3} />
            </div>
        )
    }
}
class TopElement extends React.Component {
    render() {
        return (
            <div className={this.props.section} id={this.props.idsection}>
                <TopCard cardsection="topCard" title="Reviews" stats={1281} />
                <TopCard cardsection="topCard" title="Average Rating" stats={4.6} />
                <TopCardB cardsection="topCard" title="Sentiment Analysis" stat1={960} stat2={960} stat3={321} />
            </div>
        )
    }
}
class MainElement extends React.Component {
    render() {
        return (
            <div className="mainElementContainer">
                <div className={this.props.section} id={this.props.idSection}>
                    <Title title="Website Visitors" />
                    <Stats stats={821} />
                </div>
                <div className={this.props.chartsection} id={this.props.chartsection}>
                    <p class="display"> canvas tag here </p>
                </div>
            </div>
        )
    }
}
class RightBar extends React.Component {
    render() {
        return (
            <div className={this.props.class} id={this.props.id}>
                <div id={this.props.topElementId}>
                    <TopElement section="topElement" idsection="topElement" />
                </div>
                <div id={this.props.mainElementId}>
                    <MainElement section="mainElement" idsection="mainElement" chartsection='chart'/>
                </div>
            </div>
        )
    }
}
class App extends React.Component {
    render() {
        return (
            <div className='mainContainer'>
                <SideBar idSection="sideBar" />
                <RightBar class="rightBarContainer" id="rightBarContainer" topElementId="topElementContainer" mainElementId="mainElementContainer" />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('main')
);