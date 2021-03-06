import { defineComponent, App } from 'vue'
import { Waterfall, WaterfallOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type WaterfallChartProps = Omit<
  BaseChartProps<WaterfallOptions>,
  'chart'
> &
  WaterfallOptions

const WaterfallChart = defineComponent<WaterfallChartProps>({
  name: 'WaterfallChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Waterfall} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
WaterfallChart.install = (app: App) => {
  app.component(WaterfallChart.name, WaterfallChart)
}

export default WaterfallChart
