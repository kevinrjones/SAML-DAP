﻿namespace Rsk.Samples.IdentityServer.AdminUiIntegration.Models
{
    public class SendResetMfaOneTimeLinkResult
    {
        private SendResetMfaOneTimeLinkResult() {}

        public bool Succeeded => ErrorMessage == null;
        public string ErrorMessage { get; private set; }

        public static SendResetMfaOneTimeLinkResult Success()
        {
            return new SendResetMfaOneTimeLinkResult
            {
                ErrorMessage = null
            };
        }

        public static SendResetMfaOneTimeLinkResult Failed(string error)
        {
            return new SendResetMfaOneTimeLinkResult
            {
                ErrorMessage = error
            };
        }
    }
}