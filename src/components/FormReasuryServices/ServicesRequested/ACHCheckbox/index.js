import "./style.css"
function AHCCheckbox() {
  return (
    <div className="checkbox-container">
      <div>
        <input type="checkbox" name="AHC" />
        <label>ACH</label>
      </div>
      <div className="ACHCheckbox-item">
        <div className="checkbox-items">
          <div className="item">
            <input type="checkbox" name="Debit" />
            <label>Debit</label>
          </div>
          <div className="item">
            <input type="checkbox" name="credit" />
            <label>Credit</label>
          </div>
        </div>
        <div className="checkbox-items">
          <div className="item">
            <input type="checkbox" name="PPD" />
            <label>PPD</label>
          </div>
          <div className="item">
            <input type="checkbox" name="CCD" />
            <label>CCD</label>
          </div>
          <div className="item">
            <input type="checkbox" name="CTX" />
            <label>CTX</label>
          </div>
          <div className="item">
            <input type="checkbox" name="Web" />
            <label>Web</label>
          </div>
          <div className="item">
            <input type="checkbox" name="Tel" />
            <label>Tel</label>
          </div>
        </div>
        <div className="checkbox-items">
          <div className="item">
            <input type="checkbox" name="SameDayACH" />
            <label>Same Day ACH</label>
          </div>
          <div className="item">
            <input type="checkbox" name="Prefunding" />
            <label>Prefunding</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AHCCheckbox;
