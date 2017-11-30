import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'wr-compass',
  styleUrl: 'compass.scss'
})

export class Compass {
  @Element() compassElement: HTMLElement;

  /**
   * The compass direction (in degrees) to which the compass should point.
   */
  @Prop() bearing: number;

  /**
   * The compass direction (in degrees) the device is facing.
   */
  @Prop() heading: number;

  /**
   * Specifies whether or not to show the heading
   * and bearing values next to the compass, for
   * debugging purposes.
   */
  @Prop() showValues = false;
  
  render() {
    const newBearing = (this.heading || 0) - (this.bearing || 0) - 40;

    const styles = {
      valuesVisbility: {visibility: this.showValues ? 'visible' : 'hidden'},
      rotation: {
        transform: `rotate(${newBearing}deg)`,
        '-webkit-transform': `rotate(${newBearing}deg)`,
      }
    };

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
          <div class="dip-needle" style={styles.rotation}></div>
        </div>
        <div style={styles.valuesVisbility} class="author">{this.bearing}° / {this.heading}°</div>
      </div>
    );
  }
}
