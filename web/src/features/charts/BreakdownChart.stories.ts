import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '../../hooks/colors';
import { getCo2ColorScale } from '../../hooks/theme';
import { TimeAverages } from '../../utils/constants';
import AreaGraph from './elements/AreaGraph';
import { getLayerFill } from './hooks/useBreakdownChartData';
import { zoneDetailMock } from 'stories/mockData';
import { EnergyUnits } from 'utils/units';

const meta: Meta<typeof AreaGraph> = {
  title: 'charts/BreakdownChart',
  component: AreaGraph,
};

type Story = StoryObj<typeof AreaGraph>;

const chartData = [
  {
    datetime: '2022-11-27T12:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 207.54 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.343,
      coal: Number.NaN,
      wind: 1.235,
      solar: 0.95,
      hydro: 1.749,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 2.339,
      oil: Number.NaN,
      unknown: 0.026,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-27T13:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 215.99 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.344,
      coal: Number.NaN,
      wind: 1.168,
      solar: 0.836,
      hydro: 1.667,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 2.349,
      oil: Number.NaN,
      unknown: 0.028,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-27T14:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 241.49 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.34,
      coal: Number.NaN,
      wind: 1.199,
      solar: 0.611,
      hydro: 1.108,
      'hydro storage': 0.026,
      'battery storage': Number.NaN,
      gas: 2.335,
      oil: Number.NaN,
      unknown: 0.027,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-27T15:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 229.06 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.343,
      coal: Number.NaN,
      wind: 1.422,
      solar: 0.34,
      hydro: 1.232,
      'hydro storage': 0.603,
      'battery storage': Number.NaN,
      gas: 2.344,
      oil: Number.NaN,
      unknown: 0.028,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-27T16:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 196.43 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.344,
      coal: Number.NaN,
      wind: 1.863,
      solar: 0.082,
      hydro: 1.942,
      'hydro storage': 1.077,
      'battery storage': Number.NaN,
      gas: 2.312,
      oil: Number.NaN,
      unknown: 0.029,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-27T17:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 173.56 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.339,
      coal: Number.NaN,
      wind: 2.66,
      solar: 0.001,
      hydro: 2.161,
      'hydro storage': 1.491,
      'battery storage': Number.NaN,
      gas: 2.294,
      oil: Number.NaN,
      unknown: 0.028,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-27T18:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 164.68 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.341,
      coal: Number.NaN,
      wind: 3.133,
      solar: Number.NaN,
      hydro: 2.179,
      'hydro storage': 1.565,
      'battery storage': Number.NaN,
      gas: 2.283,
      oil: Number.NaN,
      unknown: 0.028,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-27T19:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 162.84 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.34,
      coal: Number.NaN,
      wind: 3.347,
      solar: Number.NaN,
      hydro: 2.152,
      'hydro storage': 1.693,
      'battery storage': Number.NaN,
      gas: 2.326,
      oil: Number.NaN,
      unknown: 0.028,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-27T20:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 168.19 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.343,
      coal: Number.NaN,
      wind: 3.513,
      solar: Number.NaN,
      hydro: 1.78,
      'hydro storage': 1.155,
      'battery storage': Number.NaN,
      gas: 2.333,
      oil: Number.NaN,
      unknown: 0.028,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-27T21:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 175.13 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.341,
      coal: Number.NaN,
      wind: 3.264,
      solar: Number.NaN,
      hydro: 1.693,
      'hydro storage': 0.911,
      'battery storage': Number.NaN,
      gas: 2.334,
      oil: Number.NaN,
      unknown: 0.027,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-27T22:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 188.99 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.334,
      coal: Number.NaN,
      wind: 3.087,
      solar: Number.NaN,
      hydro: 1.324,
      'hydro storage': 0.336,
      'battery storage': Number.NaN,
      gas: 2.312,
      oil: Number.NaN,
      unknown: 0.027,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-27T23:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 179.01 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.334,
      coal: Number.NaN,
      wind: 3.035,
      solar: Number.NaN,
      hydro: 1.23,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 1.95,
      oil: Number.NaN,
      unknown: 0.028,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-28T00:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 175.39 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.329,
      coal: Number.NaN,
      wind: 2.724,
      solar: 0.002,
      hydro: 1.183,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 1.694,
      oil: Number.NaN,
      unknown: 0.029,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-28T01:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 171.54 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.326,
      coal: Number.NaN,
      wind: 2.483,
      solar: 0.003,
      hydro: 1.277,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 1.553,
      oil: Number.NaN,
      unknown: 0.029,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-28T02:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 138.41 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.343,
      coal: Number.NaN,
      wind: 2.344,
      solar: 0.003,
      hydro: 0.885,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 1.554,
      oil: Number.NaN,
      unknown: 0.03,
      ES: 0.242,
    },
  },
  {
    datetime: '2022-11-28T03:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 136.08 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.345,
      coal: Number.NaN,
      wind: 2.095,
      solar: 0.003,
      hydro: 0.793,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 1.543,
      oil: Number.NaN,
      unknown: 0.028,
      ES: 0.521,
    },
  },
  {
    datetime: '2022-11-28T04:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 138.39 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.347,
      coal: Number.NaN,
      wind: 2.322,
      solar: 0.003,
      hydro: 0.709,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 1.479,
      oil: Number.NaN,
      unknown: 0.028,
      ES: 0.569,
    },
  },
  {
    datetime: '2022-11-28T05:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 138.58 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.344,
      coal: Number.NaN,
      wind: 2.437,
      solar: 0.002,
      hydro: 0.949,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 1.493,
      oil: Number.NaN,
      unknown: 0.029,
      ES: 0.344,
    },
  },
  {
    datetime: '2022-11-28T06:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 203.46 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.343,
      coal: Number.NaN,
      wind: 2.412,
      solar: 0.003,
      hydro: 0.943,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 1.898,
      oil: Number.NaN,
      unknown: 0.028,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-28T07:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 187.37 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.35,
      coal: Number.NaN,
      wind: 2.365,
      solar: 0.017,
      hydro: 1.445,
      'hydro storage': 0.389,
      'battery storage': Number.NaN,
      gas: 1.93,
      oil: Number.NaN,
      unknown: 0.029,
      ES: 0,
    },
  },
  {
    datetime: '2022-11-28T08:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 113.91 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.341,
      coal: Number.NaN,
      wind: 2.025,
      solar: 0.327,
      hydro: 1.02,
      'hydro storage': 0.237,
      'battery storage': Number.NaN,
      gas: 1.938,
      oil: Number.NaN,
      unknown: 0.029,
      ES: 0.12,
    },
  },
  {
    datetime: '2022-11-28T09:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 101.18 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.343,
      coal: Number.NaN,
      wind: 1.569,
      solar: 0.743,
      hydro: 1.059,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 1.768,
      oil: Number.NaN,
      unknown: 0.029,
      ES: 1.322,
    },
  },
  {
    datetime: '2022-11-28T10:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 96.02 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.342,
      coal: Number.NaN,
      wind: 1.564,
      solar: 1.016,
      hydro: 1.031,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 1.691,
      oil: Number.NaN,
      unknown: 0.029,
      ES: 1.773,
    },
  },
  {
    datetime: '2022-11-28T11:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 99.52 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.346,
      coal: Number.NaN,
      wind: 1.65,
      solar: 1.066,
      hydro: 0.72,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 1.551,
      oil: Number.NaN,
      unknown: 0.028,
      ES: 2.44,
    },
  },
  {
    datetime: '2022-11-28T12:00:00.000Z',
    meta: { ...zoneDetailMock, exchangeCo2Intensities: { ES: 88.99 } },
    layerData: {
      nuclear: Number.NaN,
      geothermal: Number.NaN,
      biomass: 0.342,
      coal: Number.NaN,
      wind: 1.895,
      solar: 1.068,
      hydro: 0.639,
      'hydro storage': Number.NaN,
      'battery storage': Number.NaN,
      gas: 1.605,
      oil: Number.NaN,
      unknown: 0.028,
      ES: 2.403,
    },
  },
].map((d) => ({ ...d, datetime: new Date(d.datetime) }));

const includesStorageData = [...chartData];

const layerFill = getLayerFill(getCo2ColorScale(colors.bright));

export const IncludesStorage: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    testId: 'none',
    data: includesStorageData,
    layerKeys: Object.keys(includesStorageData[0].layerData),
    layerFill,
    selectedTimeAggregate: TimeAverages.HOURLY,
    valueAxisLabel: `€ / ${EnergyUnits.MEGAWATT_HOURS}`,
    isMobile: false,
    height: '12em',
    datetimes: chartData.map((d) => d.datetime),
  },
};

export default meta;
