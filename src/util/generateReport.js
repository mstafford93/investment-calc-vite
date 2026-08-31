import jsPDF from 'jspdf';
import { formatter } from './investment';


export function generatepdf(data){
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text('Investment Report', 10, 10);
    doc.setFontSize(12);
    doc.text(`Beginning Investment: ${formatter.format(data.startInvest)}`, 10, 30);
    doc.text(`Annual Investment: ${formatter.format(data.annualInvest)}`, 10, 40);
    doc.text(`Return on Investment: ${data.expectReturn}%`, 10, 50);
    doc.text(`Years of Investment: ${data.yearsInvest}`, 10, 60);

    let yOffset = 80;
    const linespacing = 10;
    const pageHeight = doc.internal.pageSize.height
    data.results.forEach((result) =>{
        if (yOffset+50 > pageHeight){
            doc.addPage();
            yOffset = 20;
        }
        doc.text(`Year: ${result.year}`, 10, yOffset)
        doc.text(`Interest (Year): ${formatter.format(result.interest)}`,10, (yOffset+linespacing))
        doc.text(`Interest (Total): ${formatter.format(result.totalInterest)}`,10, (yOffset+2*linespacing))
        doc.text(`Invested Capital: ${formatter.format(result.investedCapital)}`,10, (yOffset+3*linespacing))
        doc.text(`Total Investment Value: ${formatter.format(result.investmentValue)}`,10, (yOffset+4*linespacing))

        yOffset+=60;
    })
    doc.save('Investment Report.pdf')
}