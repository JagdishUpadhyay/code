import React, { Component } from 'react';
const $ = require('jquery');
const dt = require('datatables.net');

export default class DhlDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:  [
        {
          "wh_id": "SITE1",
          "client": "CLIENT1",
          "receive": "RCV1",
          "rcv_truck": "RCV1VRX1IOYZY",
          "insdte": "29/12/19",
          "moddte": "30/12/19",
        },
        {
            "wh_id": "SITE1",
            "client": "CLIENT1",
            "receive": "RCV2",
            "rcv_truck": "RCV1VRX1IP8BQ",
            "insdte": "29/12/19",
            "moddte": "30/12/19",
        },
        {
            "wh_id": "SITE1",
            "client": "CLIENT1",
            "receive": "RCV3",
            "rcv_truck": "RCV1VRX1IOQQ6",
            "insdte": "28/12/19",
            "moddte": "28/12/19",
        },
        {
            "wh_id": "SITE1",
            "client": "CLIENT2",
            "receive": "RCV4",
            "rcv_truck": "RCV1VRX1J3R86",
            "insdte": "28/12/19",
            "moddte": "28/12/19",
        },
        {
            "wh_id": "SITE1",
            "client": "CLIENT2",
            "receive": "RCV5",
            "rcv_truck": "RCV1VRX1J3R86",
            "insdte": "28/12/19",
            "moddte": "28/12/19",
        },
        {
            "wh_id": "SITE1",
            "client": "CLIENT2",
            "receive": "RCV6",
            "rcv_truck": "RCV1VRX20KUTC",
            "insdte": "29/12/19",
            "moddte": "30/12/19",
        }

      ]
    };
  }

  getHeaders(response) {
    let columns = [];
    for(let key in response) {
        let obj = {"sDefaultContent": "" , data:  key, title: key};
        columns.push(obj);
    }
    return columns;
  }

  componentDidMount() {
    this.$el = $(this.el);
    this.$el.DataTable = dt;
    this.$el.DataTable({
        "dom": 'frtlip',
        "destroy": true,
        "pagingType": "full_numbers",
        language: {
            paginate: {
                next: '&#x3e', // or '→'
                previous: '&#x3c', // or '←'
                first: '&#x3c&#x3c', // or '→'
                last: '&#x3e&#x3e' // or '←'
            }},  
      lengthChange: false,
      data: this.state.data,
      columns: this.getHeaders(this.state.data[0])
    });
  }

  componentWillUnmount() {
    $('.display')
      .find('table')
      .DataTable()
      .destroy(true);
  }

  render() {
    return (
      <div  className="container" style={{ marginTop: '50px'}}>
        <table className="display" width="100%" id="dataTable" ref={el => this.el = el} />
      </div>
    );
  }
}