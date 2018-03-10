/*
 * This file is part of ANA StanCal.
 * See: <https://github.com/anairsoft/stancal>.
 *
 * Copyright (C) 2018 Association de Normalisation de l'Airsoft <contact@ana.asso.fr>.
 * Copyright (C) 2018 Jérémy Walther <jeremy.walther@golflima.net>.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 * Otherwise, see: <https://www.gnu.org/licenses/gpl-3.0>.
 */

import React, { Component } from 'react';
import { defineMessages, intlShape, injectIntl } from 'react-intl';
import RowStandard from './RowStandard';
import RowFooter from './RowFooter';
import RowValueUnit from './RowValueUnit';

const messages = defineMessages({
  energyLabel: {
    id: 'compute.result.energy.label',
    defaultMessage: 'Energy:',
  },
  massLabel: {
    id: 'compute.result.mass.label',
    defaultMessage: 'Mass:',
  },
  rangeMax0Label: {
    id: 'compute.result.range.max.0.label',
    defaultMessage: 'Maximum range:',
  },
  rangeMax0Warning: {
    id: 'compute.result.range.max.0.warning',
    defaultMessage: 'Maximum range is computed for a 6mm spherical projectile fired horizontally from 2m height.',
  },
  stanag2920v50msLabel: {
    id: 'compute.result.stanag2920.label',
    defaultMessage: 'STANAG 2920 V50:',
  },
  stanag2920Warning: {
    id: 'compute.result.stanag2920.warning',
    defaultMessage: 'STANAG 2920 V50 is computed considering a projectile mass of 1.102g.',
  },
  standardEn166FLabel: {
    id: 'standard.en166.f.label',
    defaultMessage: 'EN 166 F (Spectacles)',
  },
  standardEn166BLabel: {
    id: 'standard.en166.b.label',
    defaultMessage: 'EN 166 B (Goggles)',
  },
  standardEn166ALabel: {
    id: 'standard.en166.a.label',
    defaultMessage: 'EN 166 A (Faceshields)',
  },
  standardStanag4296Label: {
    id: 'standard.stanag4296.label',
    defaultMessage: 'STANAG 4296',
  },
  standardAnsiZ871SpectaclesLabel: {
    id: 'standard.ansiz871.spectacles.label',
    defaultMessage: 'ANSI Z87.1+ (Spectacles)',
  },
  standardAnsiZ871GogglesLabel: {
    id: 'standard.ansiz871.goggles.label',
    defaultMessage: 'ANSI Z87.1+ (Goggles)',
  },
  standardAnsiZ871FaceshieldsLabel: {
    id: 'standard.ansiz871.faceshields.label',
    defaultMessage: 'ANSI Z87.1+ (Faceshields)',
  },
  standardMilPrf31013Label: {
    id: 'standard.milprf31013.label',
    defaultMessage: 'MIL-PRF-31013',
  },
  standardMilDtl43511DLabel: {
    id: 'standard.mildtl43511d.label',
    defaultMessage: 'MIL-DTL-43511D',
  },
  velocityLabel: {
    id: 'compute.result.velocity.label',
    defaultMessage: 'Velocity:',
  },
});

class ComputationResult extends Component {
  render() {
    const {formatMessage} = this.props.intl;
    return (
      <div>
        <RowValueUnit label={formatMessage(messages.massLabel)} 
          value={this.props.massValue} unit={this.props.massUnit} comment={this.props.massComment} />
        <RowValueUnit label={formatMessage(messages.velocityLabel)}
          value={this.props.velocityValue} unit={this.props.velocityUnit} comment={this.props.velocityComment} />
        <RowValueUnit label={formatMessage(messages.energyLabel)}
          value={this.props.energyValue.toFixed(3)} unit={this.props.energyUnit} />
        <RowValueUnit label={formatMessage(messages.rangeMax0Label)}
          value={this.props.rangeMax0Value.toFixed(1)} unit={this.props.rangeMax0Unit} />
        <RowValueUnit label={formatMessage(messages.stanag2920v50msLabel)}
          value={this.props.stanag2920v50msValue.toFixed(3)} unit={this.props.stanag2920v50msUnit} comment={this.props.stanag2920v50msComment} />
        <RowStandard value={this.props.energyValue} max={0.87075} label={formatMessage(messages.standardEn166FLabel)} />
        <RowStandard value={this.props.energyValue} max={6.192} label={formatMessage(messages.standardEn166BLabel)} />
        <RowStandard value={this.props.energyValue} max={15.523} label={formatMessage(messages.standardEn166ALabel)} />
        <RowStandard value={this.props.energyValue} max={7.51} label={formatMessage(messages.standardStanag4296Label)} />
        <RowStandard value={this.props.energyValue} max={1.107868752} label={formatMessage(messages.standardAnsiZ871SpectaclesLabel)} />
        <RowStandard value={this.props.energyValue} max={3.0774132} label={formatMessage(messages.standardAnsiZ871GogglesLabel)} />
        <RowStandard value={this.props.energyValue} max={4.431475008} label={formatMessage(messages.standardAnsiZ871FaceshieldsLabel)} />
        <RowStandard value={this.props.energyValue} max={7.150814378435543} label={formatMessage(messages.standardMilPrf31013Label)} />
        <RowStandard value={this.props.energyValue} max={15.02369943189588} label={formatMessage(messages.standardMilDtl43511DLabel)} />
        <RowFooter glyph="alert" text={formatMessage(messages.rangeMax0Warning)} />
        <RowFooter glyph="alert" text={formatMessage(messages.stanag2920Warning)} />
      </div>
    );
  }
}

ComputationResult.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(ComputationResult);