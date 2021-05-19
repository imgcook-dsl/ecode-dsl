'use strict';

const { React, ecCom, antd } = window;
const { alifenext } = window;
const Col = Grid.Col;
const Row = Grid.Row;

class Page_0 extends React.Component {
  render() {
    return (
      <div>
        <div />
        <Row>
          <Col>
            <Button type={'primary'}>确定</Button>
            <span>第一列</span>
          </Col>
          <Col>
            <Icon type={'help'} size={'large'} />
            <span>第二列</span>
          </Col>
        </Row>
      </div>
    );
  }
}
//发布模块CusEle，作为模块${appId}的子模块
ecodeSDK.setCom('${appId}', 'Page_0', Page_0);
