import React, { Component, createRef, FormEvent } from 'react';
import { FormPropsI, FormStateI, FormCard, nameValid, dateValid, createImage } from './tools';
import './Form.css';

class Form extends Component<FormPropsI, FormStateI> {
  constructor(props: FormPropsI) {
    super(props);
  }

  state: FormStateI = {
    errors: {
      type: '',
      pcname: '',
      date: '',
      image: '',
      verify: '',
    },
    validate: '',
  };

  commonRef = createRef<HTMLFormElement>();
  imageRef = createRef<HTMLInputElement>();

  async validating() {
    const errors = {
      type: this.commonRef.current?.['type'].value ? '' : 'choose type',
      pcname: nameValid(this.commonRef.current?.['pcname'].value)
        ? ''
        : 'Name contains 2 words with first capital letter',
      date: dateValid(this.commonRef.current?.['date'].value) ? '' : 'invalid date',
      image: this.imageRef.current?.value ? '' : 'upload image, please',
      verify: this.commonRef.current?.['verify'].checked
        ? ''
        : 'please, read whole form one more time',
    };
    const success = Object.values(errors).every((elem) => !elem);
    this.setState({ errors: errors, validate: success ? 'Data recieved' : '' });
    return success;
  }

  createFormCard(): FormCard {
    return {
      type: this.commonRef.current?.['type'].value,
      name: this.commonRef.current?.['pcname'].value,
      date: this.commonRef.current?.['date'].value,
      availibility: (
        Array.from(this.commonRef.current?.['availibility']).find(
          (el) => (el as HTMLInputElement).checked
        ) as HTMLInputElement
      ).value,
      image: createImage(this.imageRef),
    };
  }

  async submitChecker(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const success = await this.validating();
    if (success) {
      this.props.newCard(this.createFormCard());
      this.commonRef.current?.reset();
      setTimeout(() => {
        this.setState({ validate: '' });
      }, 1500);
    }
  }

  render() {
    return (
      <form
        className="newCardForm"
        onSubmit={this.submitChecker.bind(this)}
        onChange={() => {
          this.setState({
            errors: { type: '', pcname: '', date: '', image: '', verify: '' },
          });
        }}
        ref={this.commonRef}
      >
        <div className="formMessage">{this.state.validate}</div>
        <h2>Add new computer</h2>
        <div>Computer type</div>
        <select name="type" id="type">
          <option value="">---- choose computer type ----</option>
          <option value="PC">PC</option>
          <option value="Laptop">Laptop</option>
        </select>
        <span className="formError">{this.state.errors.type}</span>
        <div>Computer name</div>
        <input
          className="textInput"
          type="text"
          name="pcname"
          placeholder="call the computer like human"
        />
        <span className="formError">{this.state.errors.pcname}</span>
        <div>Choose availibility</div>
        <div className="switch">
          <div className="green">
            <input type="radio" id="availible" name="availibility" defaultValue="availible" />
            <label htmlFor="availible">Availible</label>
          </div>
          <div className="red">
            <input type="radio" id="unavailible" name="availibility" defaultValue="unavailible" />
            <label htmlFor="unavailible">Unavailible</label>
          </div>
        </div>
        <div>Publication date</div>
        <input className="date" type="date" id="date" name="date" />
        <span className="formError">{this.state.errors.date}</span>
        <div className="upload">
          <div>
            <label htmlFor="image">Product image</label>
          </div>
          <div>
            <input type="file" id="image" ref={this.imageRef} />
          </div>
        </div>
        <span className="formError">{this.state.errors.image}</span>
        <div>
          I check all fields and ready to submit
          <input type="checkbox" name="verify" id="verify" role="checkbox" />
        </div>
        <span className="formError">{this.state.errors.verify}</span>
        <button className="submitButton inputItem" type="submit" role="button">
          submit
        </button>
      </form>
    );
  }
}

export default Form;
