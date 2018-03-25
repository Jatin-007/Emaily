const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
    const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false)

    if(invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }
    
    return null;
};

/** const re is a syntax copied from emailregex.com which helps 
 * to valid emails very easily...
 * 
 * const invalidEmails is first splitting up the string of emails in an array of emails
 * then trimming up to erase any extra spaces in each index of array
 * 
 * using filter method to test if the email is valid. 
 * If the email is invalid store it inside invalidEmails variable and pass it through if block
 * if, If block has any invalid email highlight/ show error for that specific email address...
 * 
*/
