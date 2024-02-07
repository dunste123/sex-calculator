class AppDateInput extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.container = document.createElement('div');
        this.container.classList.add('date-input');

        this.input = document.createElement('input');
        this.input.type = 'date';
        this.input.required = true;
        this.container.append(this.input);

        this.append(this.container);
    }

    calculateSexDate() {
        // Arrays start at 0, MONTHS START AT 1!
        const bday = this.input.valueAsDate;

        bday.setMonth(bday.getMonth() - 9)

        return bday;
    }
}

customElements.define('app-date-input', AppDateInput);