import { Divider, Flex, Tag, Typography } from 'antd'
import { formatNumber } from '../utils'
import CoinInfo from './CoinInfo'

export default function CoinInfoModal({ coin }) {
	return (
		<>
			<CoinInfo coin={coin} withSymbol />
			<Divider />
			<Flex>
				<Typography.Paragraph>
					<Typography.Text strong>1 Hour:</Typography.Text>
					<Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
						{coin.priceChange1h}%
					</Tag>
				</Typography.Paragraph>
				<Typography.Paragraph>
					<Typography.Text strong>1 Day:</Typography.Text>
					<Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>
						{coin.priceChange1d}%
					</Tag>
				</Typography.Paragraph>
				<Typography.Paragraph>
					<Typography.Text strong>1 Weak:</Typography.Text>
					<Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>
						{coin.priceChange1w}%
					</Tag>
				</Typography.Paragraph>
			</Flex>
			<Typography.Paragraph>
				<Typography.Text strong>Price: </Typography.Text>
				{coin.price.toFixed(2)}$
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text strong>Price BTC: </Typography.Text>
				{coin.priceBtc.toFixed(10)}
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Typography.Text strong>Market Cap: </Typography.Text>
				{formatNumber(coin.marketCap)}$
			</Typography.Paragraph>
			{coin.contractAddress && (
				<Typography.Paragraph>
					<Typography.Text strong>Contract Address:</Typography.Text>
					{coin.contractAddress}
				</Typography.Paragraph>
			)}
		</>
	)
}
