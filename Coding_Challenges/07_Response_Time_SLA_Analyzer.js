// Response Time SLA Analyzer

// As a performance tester, you collect API response times in milliseconds.
// Write a JavaScript program using a while loop that analyzes an array of
// response times and prints a performance report with min, max, average,
// and how many responses breached the SLA threshold (> 500ms).
// Use comparison operators for min/max tracking.

// Input Format: An array of numbers representing response times in milliseconds

// Output Format: Performance report with min, max, average, and SLA breach count and percentage

// Example
// const responseTimes = [120, 230, 450, 510, 180, 620], SLA_THRESHOLD = 500
// Output
// Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED

function analyzeResponseTimes(responseTimes, slaThreshold) {
    let index = 0;
    let minResponse = responseTimes[0];
    let maxResponse = responseTimes[0];
    let totalResponseTime = 0;
    let slaBreaches = 0;

    while (index < responseTimes.length) {
        const responseTime = responseTimes[index];
        totalResponseTime += responseTime;

        if (responseTime < minResponse) minResponse = responseTime;
        if (responseTime > maxResponse) maxResponse = responseTime;
        if (responseTime > slaThreshold) slaBreaches++;

        index++;
    }

    const totalRequests = responseTimes.length;
    const avgResponse = (totalResponseTime / totalRequests).toFixed(2);
    const slaBreachPct = ((slaBreaches / totalRequests) * 100).toFixed(2);
    const overallStatus = slaBreaches > 0 ? "❌ SLA VIOLATED" : "✅ SLA COMPLIED";

    return { totalRequests, minResponse, maxResponse, avgResponse, slaBreaches, slaBreachPct, overallStatus };
}

function printSLAReport(report) {
    console.log("Total Requests: " + report.totalRequests);
    console.log("Min Response: " + report.minResponse + "ms");
    console.log("Max Response: " + report.maxResponse + "ms");
    console.log("Avg Response: " + report.avgResponse + "ms");
    console.log("SLA Breaches: " + report.slaBreaches + " (" + report.slaBreachPct + "%)");
    console.log("Overall Status: " + report.overallStatus);
}

// Example usage:
const responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_THRESHOLD = 500;
const report = analyzeResponseTimes(responseTimes, SLA_THRESHOLD);
printSLAReport(report);