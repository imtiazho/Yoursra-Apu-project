import React from 'react';
import './ConfirmOrder.css';
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';

const ConfirmOrder = () => {
    return (
        <div>
            <section class="wrapper-invoice">
      
      <div class="invoice">
        <div class="invoice-information">
          <p><b>Invoice #</b> : 12345</p>
          <p><b>Created Date </b>: May, 07 2022</p>
          <p><b>Due Date</b> : May, 09 2022</p>
        </div>
        
        <div class="invoice-logo-brand">
          <img src={logo}></img>
        </div>
        
        <div class="invoice-head">
          <div class="head client-info">
            <p>Tampsh, Inc.</p>
            <p>NPWP: 12.345.678.910.111213.1415</p>
            <p>Bondowoso, Jawa timur</p>
            <p>Jln. Rengganis 05, Bondowoso</p>
          </div>
          <div class="head client-data">
            <p>-</p>
            <p>Mohammad Sahrullah</p>
            <p>Bondowoso, Jawa timur</p>
            <p>Jln. Duko Kembang, Bondowoso</p>
          </div>
        </div>

        <div class="invoice-body">
          <table class="table">
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product Invoice</td>
                <td>BDT 75.000</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>BDT 5.000</td>
              </tr>
            </tbody>
          </table>
          <div class="flex-table">
            <div class="flex-column"></div>
            <div class="flex-column">
              <table class="table-subtotal">
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>BDT 80.000</td>
                  </tr>
                  <tr>
                    <td>Tax 10%</td>
                    <td>BDT 5.000</td>
                  </tr>
                  <tr>
                    <td>Credit</td>
                    <td>BDT 0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="invoice-total-amount">
            <p>Total : BDT 80.000</p>
          </div>
        </div>
        
        <div class="invoice-footer">
          <Link to='/'>Thank you, happy ordering again! and click to go home</Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ConfirmOrder;