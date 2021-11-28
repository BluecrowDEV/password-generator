import { rand } from '../utils/randomize';

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = ',.;~^[]{}!@#$%&*()_-+=?<>';

class PasswordGenerator {
  public generatePassword(
    length: number,
    allowLowChars: boolean,
    allowUpChars: boolean,
    allowNumbers: boolean,
    allowSymbols: boolean
  ): string {
    let password = '';
    const rules = this.generateRules(
      allowLowChars,
      allowUpChars,
      allowNumbers,
      allowSymbols
    );

    for (let index = 0; index < length; index++) {
      password += this.generateChar(rules);
    }

    return password;
  }

  public autoGenerateStrongPassword(): string {
    let password = '';
    const rules = this.generateRules(true, true, true, true);

    for (let index = 0; index < 24; index++) {
      password += this.generateChar(rules);
    }

    return password;
  }

  private generateRules(
    allowLowChars: boolean,
    allowUpChars: boolean,
    allowNumbers: boolean,
    allowSymbols: boolean
  ): string[] {
    const rules: string[] = [];

    if (allowLowChars) rules.push(lowercase);
    if (allowUpChars) rules.push(uppercase);
    if (allowNumbers) rules.push(numbers);
    if (allowSymbols) rules.push(symbols);

    return rules;
  }

  private generateChar(rules: string[]): string {
    const index = rand(0, rules.length);
    const charClass = rules[index];
    const character = charClass[rand(0, charClass.length)];

    return character;
  }
}

export default new PasswordGenerator();
