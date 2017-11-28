import { Component, Element, Prop, PropWillChange } from '@stencil/core';


@Component({
  tag: 'wr-compass',
  styleUrl: 'wr-compass.scss'
})
export class WrCompass {

  @Prop() bearing: number;
  @Prop() heading: number;

  @Element() compassElement: HTMLElement;


  @PropWillChange('bearing')
  bearingChanged(newValue: number) {
    this.updateCompass(newValue, this.heading);
  }

  @PropWillChange('heading')
  headingChanging(newValue: number) {
    this.updateCompass(this.bearing, newValue);
  }

  updateCompass(heading, bearing) {
    var newBearing = (heading || 0) - (bearing || 0) - 40;
    var needle = this.compassElement.getElementsByClassName('dip-needle');
    var elem = needle[0] as HTMLElement;
    elem.style.webkitTransform = `rotate(${newBearing}deg)`;
  }

  /**
   * The component will load but has not rendered yet.
   * 
   * This is a good place to make any last minute updates before rendering. 
   */
  componentDidLoad() {
    this.updateCompass(this.heading, this.bearing);
  }
  render() {
    return (
      <div class="compass">
        <div class="compass-main">
          {/* <!--  Rótulos | Labels --> */}
          <span class="north-label">N</span>
          <span class="east-label">E</span>
          <span class="west-label">W</span>
          <span class="south-label">S</span>
          {/* <!-- Rosa dos Ventos | Compass Rose --> */}
          <div class="compass-rose">
            {/* <!-- Pontos Cardiais | Cardial Points --> */}
            <div class="cardial-points">
              <div class="north-pointer pointer"></div>
              <div class="east-pointer pointer"></div>
              <div class="west-pointer pointer"></div>
              <div class="south-pointer pointer"></div>
            </div>
            {/* <!-- Pontos Ordinais | Ordinal Points --> */}
            <div class="ordinal-points">
              <div class="northeast-pointer"></div>
              <div class="northwest-pointer"></div>
              <div class="southeast-pointer"></div>
              <div class="south-west-pointer"></div>
            </div>
          </div>
          {/* <!-- Bt Center --> */}
          <div class="bt-center"></div>
          {/* <!-- Agulha Magnética | Dip Needle --> */}
          <div class="dip-needle"></div>
        </div>
        <div class="author">{this.bearing}° / {this.heading}°</div>
      </div>
    );
  }
}
