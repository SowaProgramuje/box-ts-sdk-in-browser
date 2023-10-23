import React, { Component } from 'react'
import { BoxOAuth, OAuthConfig } from 'box-typescript-sdk-gen/lib/oauth.js'


export class Box extends Component<{}> {
  componentDidMount() {
    const config = {
      clientId: 'OAUTH_CLIENT_ID',
      clientSecret: 'OAUTH_CLIENT_SECRET',
    };
    const oauth: any = new BoxOAuth({ config: config })
    
    // // the URL to redirect the user to
    const authorize_url: string = oauth.getAuthorizeUrl()
    
    // console.log(authorize_url);
  }

  render() {
    return <a href="">Get Box data</a>
  }
}