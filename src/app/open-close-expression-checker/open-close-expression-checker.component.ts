import {Component} from '@angular/core';

@Component({
  selector: 'app-open-close-expression-checker',
  templateUrl: './open-close-expression-checker.component.html',
  styleUrls: ['./open-close-expression-checker.component.css']
})
export class OpenCloseExpressionCheckerComponent {
  expression: string = '';
  openChars = ['(', '{', '<', '['];
  closeChars = [')', '}', '>', ']'];
  isExpressionValid: boolean = false;
  isVerified: boolean = false;

  verifyExpression() {
    if (this.expression.length === 0) {
      return;
    }

    this.isVerified = true;
    let openCharsStack: string[] = [];
    let chars = [...this.expression];
    let status = true;
    let closeCharCounter = 0;

    if (this.verifyExpressionContainsChars(chars)) {
      chars.forEach((char) => {

        if (this.openChars.includes(char)) {
          openCharsStack.push(char);
        }

        if (this.closeChars.includes(char)) {
          if (openCharsStack.length === 0) {
            this.isExpressionValid = false;
            return;
          }

          closeCharCounter++;

          switch (char) {
            case ')' : {
              if (openCharsStack.pop() !== '(') {
                status = false;
              }
              break;
            }

            case '}': {
              if (openCharsStack.pop() !== '{') {
                status = false;
              }
              break;
            }

            case '>': {
              if (openCharsStack.pop() !== '<') {
                status = false;
              }
              break;
            }

            case ']' : {
              if (openCharsStack.pop() !== '[') {
                status = false;
              }
              break;
            }

          }
        }

        if (!status) {
          this.isExpressionValid = false;
          return;
        }
      });

      this.expression = '';

      this.isExpressionValid = ( status && closeCharCounter > 0 && openCharsStack.length === 0);
    } else {
      this.expression = '';
      this.isExpressionValid = true;
    }
  }

  setIsVerified() {
    this.isVerified = false;
  }

  private verifyExpressionContainsChars(expressionChars: any[]) {
    let allOpenANdCLoseChars = [...this.openChars, ...this.closeChars];
    let status = false;

    expressionChars.forEach(
      c => {
        if (allOpenANdCLoseChars.includes(c)) {
          status = true;
        }
      }
    );

    return status;
  }
}
