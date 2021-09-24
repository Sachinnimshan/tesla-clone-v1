import {faMusic, faClock, faCar, faThermometerHalf, faBolt, faMapMarkedAlt, faKey, faShoppingBag, faWrench, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const items = [
    {
        _id: 1,
        title: "Media",
        icon: faMusic
    },
    {
        _id: 2,
        title: "Software Updates",
        icon: faClock,
        subTitle: "Approximate time to install: 45 min"
    },
    {
        _id: 3,
        title: "Climate",
        icon: faThermometerHalf,
        subTitle: "20F"
    },
    {
        _id: 4,
        title: "Controls",
        icon: faCar
    },
    {
        _id: 5,
        title: "Charging",
        icon: faBolt
    },
    {
        _id: 6,
        title: "Location",
        icon: faMapMarkedAlt
    },
    {
        _id: 7,
        title: "Upgrades",
        icon: faShoppingBag
    },
    {
        _id: 8,
        title: "Phone Key",
        icon: faKey,
        subTitle: "Disconnected"
    },
    {
        _id: 9,
        title: "Services",
        icon: faWrench
    },
    {
        _id: 10,
        title: "Roadside assistance",
        icon: faExclamationTriangle
    }
]


export default items;