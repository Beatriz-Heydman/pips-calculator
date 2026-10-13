// Libs
import { Controller, useForm } from 'react-hook-form';
import { PiCurrencyDollarBold } from 'react-icons/pi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { LuPercent } from 'react-icons/lu';

// Components
import { Button, Input, Modal, Switch, Typography } from '@components';

// Types
import type { Preferences } from '@shared';
import type { PreferencesModalProps } from './types';

// Styles
import { StyledPreferencesModal } from './styles';

// Utils
import {
  formatDollar,
  validateField,
  validateOptional,
  validatePercentage,
} from '@shared';

export function PreferencesModal({
  preferences,
  onSave,
  onClose,
}: PreferencesModalProps) {
  const { control, handleSubmit, formState } = useForm<Preferences>({
    defaultValues: preferences,
  });
  const { errors } = formState;

  return (
    <Modal
      title="Preferências"
      description="Configure como a calculadora de pips irá considerar os valores."
      onClose={onClose}
    >
      <StyledPreferencesModal onSubmit={handleSubmit(onSave)}>
        <div className="preference-row">
          <div className="preference-icon">
            <LuPercent size={18} />
          </div>

          <div className="preference-text">
            <Typography color="#020414" fontWeight="600">
              Calcular com base no percentual da conta por padrão
            </Typography>
            <Typography color="#5b6480" fontSize="0.85rem" fontWeight="400">
              Ativa a opção para calcular o tamanho do lote com base no
              percentual da sua conta.
            </Typography>
          </div>

          <Controller
            name="useAccountPercentage"
            control={control}
            render={({ field }) => (
              <Switch
                aria-label="Calcular com base no percentual da conta por padrão"
                checked={field.value}
                onChange={(event) => field.onChange(event.target.checked)}
              />
            )}
          />
        </div>

        <div className="preference-row">
          <div className="preference-icon">
            <LuPercent size={18} />
          </div>

          <div className="preference-text">
            <Typography color="#020414" fontWeight="600">
              Percentual por operação
            </Typography>
            <Typography color="#5b6480" fontSize="0.85rem" fontWeight="400">
              Informe o percentual da sua conta que deseja arriscar em cada
              operação.
            </Typography>
          </div>

          <div className="preference-control">
            <Controller
              name="percentagePerOperation"
              control={control}
              rules={{ validate: validateOptional(validatePercentage) }}
              render={({ field }) => (
                <Input
                  inputMode="numeric"
                  placeholder="Ex.: 5"
                  rightSlot="%"
                  value={field.value}
                  errorMessage={errors.percentagePerOperation?.message}
                  onChange={(event) =>
                    field.onChange(event.target.value.replace(/\D/g, ''))
                  }
                />
              )}
            />
          </div>
        </div>

        <div className="preference-row">
          <div className="preference-icon">
            <PiCurrencyDollarBold size={18} />
          </div>

          <div className="preference-text">
            <Typography color="#020414" fontWeight="600">
              Risco da operação (USD)
            </Typography>
            <Typography color="#5b6480" fontSize="0.85rem" fontWeight="400">
              Informe o valor que você está disposto a arriscar na operação.
            </Typography>
          </div>

          <div className="preference-control">
            <Controller
              name="operationRisk"
              control={control}
              render={({ field }) => (
                <Input
                  inputMode="numeric"
                  placeholder="Ex.: 50"
                  rightSlot="USD"
                  value={formatDollar(field.value)}
                  errorMessage={errors.operationRisk?.message}
                  onChange={(event) =>
                    field.onChange(event.target.value.replace(/\D/g, ''))
                  }
                />
              )}
            />
          </div>
        </div>

        <div className="preference-row">
          <div className="preference-icon">
            <IoAnalyticsSharp size={18} />
          </div>

          <div className="preference-text">
            <Typography color="#020414" fontWeight="600">
              Valor do pip (USD)
            </Typography>
            <Typography color="#5b6480" fontSize="0.85rem" fontWeight="400">
              Informe o valor de 1 pip no par que você está operando.
            </Typography>
          </div>

          <div className="preference-control">
            <Controller
              name="pipValue"
              control={control}
              rules={{ validate: validateOptional(validateField) }}
              render={({ field }) => (
                <Input
                  inputMode="numeric"
                  placeholder="Ex.: 10"
                  rightSlot="USD"
                  value={formatDollar(field.value)}
                  errorMessage={errors.pipValue?.message}
                  onChange={(event) =>
                    field.onChange(event.target.value.replace(/\D/g, ''))
                  }
                />
              )}
            />
          </div>
        </div>

        <div className="preference-actions">
          <Button
            type="button"
            variant="outline"
            label="Cancelar"
            onClick={onClose}
          />
          <Button type="submit" label="Salvar" />
        </div>
      </StyledPreferencesModal>
    </Modal>
  );
}
