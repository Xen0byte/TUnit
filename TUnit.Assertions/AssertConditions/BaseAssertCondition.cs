using System.Runtime.CompilerServices;
using TUnit.Assertions.AssertionBuilders;

namespace TUnit.Assertions.AssertConditions;

public abstract class BaseAssertCondition
{
    protected internal string? OverriddenMessage { get; set; }
    protected internal abstract string GetFailureMessage();
    protected internal abstract string GetFullFailureMessage();
}

public abstract class BaseAssertCondition<TActual> : BaseAssertCondition
{
    internal InvokableAssertionBuilder<TActual> ChainedToWithoutExpression(AssertionBuilder<TActual> assertionBuilder)
    {
        return assertionBuilder.WithAssertion(this);
    }
    
    internal InvokableAssertionBuilder<TActual> ChainedTo(AssertionBuilder<TActual> assertionBuilder, string[] argumentExpressions, [CallerMemberName] string caller = "")
    {
        return assertionBuilder.AppendExpression($"{caller}({string.Join(", ", argumentExpressions)})").WithAssertion(this);
    }
    
    internal bool Assert(AssertionData<TActual> assertionData)
    {
        return Assert(assertionData.Result, assertionData.Exception, assertionData.ActualExpression);
    }

    protected TActual? ActualValue { get; private set; }
    protected Exception? Exception { get; private set; }
    protected internal string? ActualExpression { get; private set; }
    
    internal bool Assert(TActual? actualValue, Exception? exception, string? actualExpression)
    {
        ActualValue = actualValue;
        Exception = exception;
        ActualExpression = actualExpression;
        
        return Passes(actualValue, exception);
    }

    protected abstract bool Passes(TActual? actualValue, Exception? exception);

    protected internal override string GetFullFailureMessage()
    {
        if (string.IsNullOrEmpty(Because))
        {
            return GetFailureMessage();
        }

        return $"{GetFailureMessage()}{Environment.NewLine}{Because}";
    }

    protected string Because => _becauseReason?.ToString() ?? string.Empty;

    private BecauseReason? _becauseReason;
    
    internal virtual void SetBecauseReason(BecauseReason becauseReason)
    {
        if (_becauseReason != null)
        {
            // If multiple because reasons are provided, only apply them to the newer assertions.
            return;
        }
        
        _becauseReason = becauseReason;
    }
}