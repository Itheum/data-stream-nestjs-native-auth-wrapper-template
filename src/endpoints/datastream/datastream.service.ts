import { Injectable } from "@nestjs/common";
@Injectable()
export class DatastreamService {
  constructor() {}
  placeholderFunction(headers: any, auth: any) {
    /* custom headers and info you have access to:

    From Data Marshal:
    1) itm-marshal-fwd-chainid: The Chain ID the caller is on
    2) itm-marshal-fwd-tokenid: The Data NFT token ID the caller is trying to open

    From Native Auth Token (after it's parsed):
    1) address: caller address : (i.e. the authenticated caller who the Itheum Data Marshal verified has the Data NFT in their wallet)
    2...) ttl, origin, signature, blockHash & body: other options available directly via MVX native auth spec. See here for more details: https://github.com/multiversx/mx-sdk-js-native-auth-server

    You can use all these headers and data to customize the response. e.g. use the address and/or itm-marshal-fwd-tokenid to get the NFT ID, send that
    to another graphQL or insights endpoint and return some "insights" on this for the user.
    */

    const callerAddress = auth?.address;
    const marshalInjectedChainID = headers["itm-marshal-fwd-chainid"];
    const marshalInjectedTokenID = headers["itm-marshal-fwd-tokenid"];

    // a dummy personalized data stream for a demo...
    const personalizedDataStream = {
      data_stream: {
        name: `Private, customized stream for NFT holder`,
        creator: "SomeTeam",
        created_on: 1692571700,
        last_modified_on: 1692571710,
      },
      data: [
        {
          txId: 1001,
          category: "purchase",
          date: 1692571701,
          item: "Gold Watch",
          store: "Nice jewellers",
          meta: `https://some_session_to_full_meta_data_of_transaction?txId=1001&user=${callerAddress}`,
        },
        {
          txId: 1000,
          category: "purchase",
          date: 1692571702,
          item: "Small Cafe Latte",
          store: "Corner Coffee Shop",
          meta: `https://some_session_link_to_full_meta_data_of_transaction?txId=1000&user=${callerAddress}`,
        },
      ],
      metaData: {
        data_marshal_injected: {
          "itm-marshal-fwd-chainid": marshalInjectedChainID || "error, this value should be forwarded",
          "itm-marshal-fwd-tokenid": marshalInjectedTokenID || "error, this value should be forwarded",
        },
        native_auth_obtained: {
          "callerAddress": callerAddress || "error, this value should be forwarded",
        },
      },
    };

    return personalizedDataStream;
  }
}
