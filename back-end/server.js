const express = require('express');
const app = express();
const { generateResponse } = require('./genai');

app.use(express.json());

app.post('/api/questions', (req, res) => {
    let customerInput = req.body.question;
    let companyPolicies = "Our return policy for large items allows customers to return products within 30 days of purchase, provided they are in their original condition and packaging. Customers are responsible for return shipping costs unless the item is defective or damaged upon arrival.";

    let prompt = `Based on the customer's input and our company policies, generate a response to the customer.

    Customer Input: ${customerInput}
    Company Policies: ${companyPolicies}`;

    generateResponse(prompt).then(response => {
        res.json({ message: response.output_text });
    }).catch(error => {
        res.status(500).json({ error: `An error occurred while generating the response: ${error}` });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
