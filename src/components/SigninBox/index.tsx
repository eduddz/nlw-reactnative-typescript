import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import { Button } from '../Button';
import { COLORS } from '../../theme';

import { useAuth } from '../../hooks/auth';

export function SigninBox() {
    const { signIn, isSigningImg } = useAuth();
    return(
        <View style={styles.container}>
            <Button 
                title='Entrar com o github'
                color={COLORS.BLACK_PRIMARY}
                backgroundColor={COLORS.YELLOW}
                icon='github' 
                onPress={signIn}
                isLoading={isSigningImg}
            />
        </View>
    )
}