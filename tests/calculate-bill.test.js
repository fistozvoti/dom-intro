describe('calculateBillManager function' , function(){
    it('should return the total of calls made' , function(){
        var test = CalculateBillManager();
        test.add("call,call");
        assert.equal(test.total(),5.50);
    });
    it('should return the total of SMSs made' , function(){
        var test = CalculateBillManager();
        test.add("sms,sms");
        assert.equal(test.total(),1.50);
});
    it('should return the total of SMSs & calls made in the string' , function(){
    var test = CalculateBillManager();
    test.add("call,sms");
    assert.equal(test.total(),3.50);
});
it('should return nothing if there is nothing entered in the string' , function(){
    var test = CalculateBillManager();
    test.add("");
    assert.equal(test.total(),0.00);
});
});