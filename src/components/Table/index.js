import * as React from 'react';
import './style.scss';
import { formatDate, getCurrencySymbol } from '../../utils'

const TableRow = 
({
    payment: {
        customer: {
            picture,
        },
        status,
        amount: {
            currency,
            value,
        },
        description,
        createdAt,
        t = formatDate(createdAt)
    }
  }) => 
    <div className="content">
        <img src={picture} alt="alt"/>
        <div className="value">{getCurrencySymbol(currency) + ' ' + value}</div>
        <div className="status"><span className={'colored ' + status}>{status}</span></div>
        <div className="description">{description}</div>
        <div className="date">{t.dt + ' ' + t.month + '. ' + t.year} <span class="prefix" /> {t.time[0] + ':' + t.time[1]}</div>
    </div>

export default TableRow;
