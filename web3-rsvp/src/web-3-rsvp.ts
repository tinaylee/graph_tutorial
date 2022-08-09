import { Address, ipfs, json } from "@graphprotocol/graph-ts"
import {
  ConfirmedAttendee,
  DepositsPaidOut,
  NewEventCreated,
  NewRSVP
} from "../generated/Web3RSVP/Web3RSVP"
import { Account, RSVP, Confirmation, Event } from "../generated/schema"
import {integer } from "@protofire/subgraph-toolkit";

export function handleConfirmedAttendee(event: ConfirmedAttendee): void {}

export function handleDepositsPaidOut(event: DepositsPaidOut): void {}

export function handleNewEventCreated(event: NewEventCreated): void {}

export function handleNewRSVP(event: NewRSVP): void {}
