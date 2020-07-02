import { gql } from 'apollo-server-micro';

const User = gql`
  type User {
    _id: String
    firstName: String
    lastName: String
    #email: String!
    #avatarLink: String
    #shortBio: String
    fullBio: String
    status: String
    shouldDisplayLocation: Boolean
    events: [Event]
  }
`;

const Event = gql`
  type Event {
    _id: String!
    name: String!
    slug: String!
    startDate: String! #Needs to be a date
    endDate: String! #Needs to be a date
    location: EventLocation
    homepage: String
    cfpLink: String
    shortDescription: String
    longDescription: String
    talks: [Talk]
    #schedule: EventSchedule
    #cfpClosingDate: Date
  }
`;

const Talk = gql`
  type Talk {
    _id: ID!
    name: String!
    abstract: String
    fullDescription: String
    speaker: [User]
  }
`;

const EventLocation = gql`
  type EventLocation {
    venue: String
    address: String
    city: String
    state: String
    province: String
    country: String
  }
`;
const TypeDefs = [User, Event, EventLocation, Talk];

export default TypeDefs;
