import { Component, State, h, Host, Listen } from '@stencil/core';
import _ from 'lodash';
import _es from 'lodash-es';
import videojs from 'video.js';

function format(target: any, propertyKey: string) {
  console.log(target, propertyKey);
}

@Component({
  tag: 'app-root',
})
export class AppRoot {
  @format something = '12';
  @State() first: string;
  @State() last: string;

  componentWillLoad() {
    const url = new URL(window.location.href);
    this.first = url.searchParams.get('first') || 'Stencil';
    this.last = url.searchParams.get('last') || 'JS';
    console.log('lodash', _.camelCase('LODASH'));
    console.log('lodash-es', _es.camelCase('LODASH-ES'));
  }

  componentDidLoad() {
    videojs('video');
  }

  @Listen('scroll', { target: 'window' })
  scroll(ev: UIEvent) {
    console.log(ev.type);
  }

  render() {
    return (
      <Host>
        <prop-cmp first={this.first} lastName={this.last} mode="ios" />
        <div id="video"></div>
      </Host>
    );
  }
}
