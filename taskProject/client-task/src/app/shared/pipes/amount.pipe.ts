import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'amount',
    standalone: true,
})

export class AmountPipe implements PipeTransform {
    transform(value: number): string {
        if (value == null) {
            return '';
        }

        const parts = value.toFixed(2).split('.');
        let intNum = parts[0];
        const decimalNum = parts[1];

        const result = intNum.length > 3 ? intNum.slice(0, -3) + ' ' + intNum.slice(-3) : intNum;

        return result + '.' + decimalNum + ' BGN'; 
    }

    // Amount Pipe with toLocaleString method
    
    // transform(value: number): string {
    //     return value?.toLocaleString('bg-BG', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' BGN'; 
    // }
}

// Implemented two custom amount pipes for experimentation:
// The pipe with slice method is currently active. 
// Keeping toLocaleString version in comments for reference