import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { fetchCryptoAPI } from '../APIFolder/cryptoApi'


const { Title } = Typography;
const Homepage = () => {

  // stores the data from the api
  const [data, setData] = useState({})

  // runs on render and fetches the api for new data
  useEffect(() => {

    fetchCryptoAPI().then((data) => {

      setData(data)
    })

  }, [])

  // saving the stats from the api
  const stats = data?.data?.stats
return (
    <>
      <Title level={2} className='heading'>Statistics</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}> <Statistic title="Total Cryptocurrencies" value={millify(stats?.total)} /></Col>
        <Col span={12}> <Statistic title="Exchanges" value={millify(stats?.totalExchanges)} /></Col>
        <Col span={12}> <Statistic title="Market Capital" value={millify(stats?.totalMarketCap)} /></Col>
        <Col span={12}> <Statistic title="Volume" value={millify(stats?.total24hVolume)} /></Col>
        <Col span={12}> <Statistic title="Tdays Markets" value={millify(stats?.totalMarkets)} /></Col>
      </Row>
    </>
  )
}

export default Homepage