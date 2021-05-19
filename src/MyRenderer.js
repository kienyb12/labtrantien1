

import { Component } from 'react';
import { DateTime } from 'react-datetime-bootstrap';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'; 
import locale from 'antd/es/date-picker/locale/vi_VN';

export class MyRenderer extends Component {
    render() {
        return (

            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <h4>Minimum Usage to pick today date</h4>
                        <DateTime />
                        <DatePicker locale={locale}/>
                    </div>
                    <div class="col-sm-3">
                        <h4>Provide a value</h4>
                        <DateTime value="2017-04-20" />
                    </div>
                    <div class="col-sm-3">
                        <h4>Format (See momentjs for available formats)</h4>
                        <DateTime pickerOptions={{ format: "LL" }} value="2017-04-20" />
                    </div>
                    <div class="col-sm-3">
                        <h4>Time Only</h4>
                        <DateTime pickerOptions={{ format: "LTS" }} />
                    </div>
                </div>
            </div>
        )
    }

}

export default MyRenderer

