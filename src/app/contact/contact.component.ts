import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  nameError: string = '';
  emailError: string = '';
  messageError: string = '';

  validateName(event: Event): void {
    const nameInput = (event.target as HTMLInputElement).value.trim();

    if (!nameInput) {
      this.nameError = 'Your name is required.';
      this.changeColor('name');
    } else if (!/^[a-zA-Z\s]+$/.test(nameInput)) {
      this.nameError = 'Please use letter. Your name is required.';
      this.changeColor('name');
    } else {
      this.nameError = '';
      this.changeColorBack('name');

    }
  }

  validateEmail(event: Event): void {
    const emailInput = (event.target as HTMLInputElement).value.trim();

    if (!emailInput) {
      this.emailError = 'Your email is required.';
      this.changeColor('email');
    } else if (!this.isValidEmail(emailInput)) {
      this.emailError = 'Invalid email format.';
      this.changeColor('email');

    } else {
      this.emailError = '';
      this.changeColorBack('email');

    }
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  validateMessage(event: Event): void {
    const messageInput = (event.target as HTMLTextAreaElement).value.trim();

    if (!messageInput) {
      this.messageError = 'Your message is empty.';
      this.changeColor('growable-input');
    } else {
      this.messageError = '';
      this.changeColorBack('growable-input');

    }
  }

  onSubmit(): void {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('growable-input') as HTMLTextAreaElement;

    this.validateName({ target: nameInput } as unknown as Event);
    this.validateEmail({ target: emailInput } as unknown as Event);
    this.validateMessage({ target: messageInput } as unknown as Event);

    if (!this.nameError && !this.emailError && !this.messageError) {
      console.log('Formular kann gesendet werden.');
      // Weitere Logik zum Absenden des Formulars hier...
    }
  }

  changeColor(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.style.border = "solid 2px #E61C40";
      this.falseIcon(id);
    }
  }

  changeColorBack(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.style.border = "solid 2px #70E61C";
      this.checkIcon(id);
    }
  }

  checkIcon(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.style.backgroundImage = "url(./assets/img/check-form.svg)";
      element.style.backgroundPositionX = "right";
      element.style.backgroundPositionY = "center";
      element.style.backgroundRepeat = "no-repeat";
    }
  }

  falseIcon(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.style.backgroundImage = "url(./assets/img/attention-form.svg)";
      element.style.backgroundPositionX = "right";
      element.style.backgroundPositionY = "center";
      element.style.backgroundRepeat = "no-repeat";
    }
  }
}

